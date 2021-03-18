using API.Configuration;
using API.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Logging;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication("Bearer", options => 
                {
                    options.ApiName = "employees";
                    options.Authority = "http://localhost:5000";
                    options.RequireHttpsMetadata = false;
                });

            services.AddIdentityServer()
            .AddInMemoryIdentityResources(InMemoryConfig.GetIdentityResources())
            .AddInMemoryApiResources(InMemoryConfig.GetApiResources())
            .AddInMemoryApiScopes(InMemoryConfig.GetApiScopes())
            .AddTestUsers(InMemoryConfig.GetUsers())
            .AddInMemoryClients(InMemoryConfig.GetClients())
            .AddDeveloperSigningCredential(); //not something we want to use in a production environment;

            IdentityModelEventSource.ShowPII = true;
            
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(_config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(options => options.AddDefaultPolicy(
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000").WithMethods("GET", "POST");
                    builder.WithHeaders("Content-Type");
                }
            ));

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseIdentityServer();
            app.UseHttpsRedirection();
            app.UseCors();
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
