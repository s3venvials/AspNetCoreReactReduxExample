using System.Collections.Generic;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Security.Claims;
using IdentityServer4;

namespace API.Configuration
{
    public static class InMemoryConfig
    {
        public static IEnumerable<IdentityResource> GetIdentityResources() =>
        new List<IdentityResource>
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
            new IdentityResource
            {
                Name = "role",
                UserClaims = new List<string> {"role"}
            }
        };

        public static List<TestUser> GetUsers() =>
        new List<TestUser>
        {
            new TestUser
            {
                SubjectId = "a9ea0f25-b964-409f-bcce-c923266249b4",
                Username = "Mick",
                Password = "MickPassword",
                Claims = new List<Claim>
                {
                    new Claim("given_name", "Mick"),
                    new Claim("family_name", "Mining")
                }
            },
            new TestUser
            {
                SubjectId = "c95ddb8c-79ec-488a-a485-fe57a1462340",
                Username = "Jane",
                Password = "JanePassword",
                Claims = new List<Claim>
                {
                    new Claim("given_name", "Jane"),
                    new Claim("family_name", "Downing")
                }
            }
        };

        public static IEnumerable<Client> GetClients() =>
        new List<Client>
        {
            new Client
            {
                ClientId = "company-employee",
                ClientSecrets = new [] { new Secret("codemazesecret".Sha512()) },
                AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                AllowedScopes = { IdentityServerConstants.StandardScopes.OpenId }
            },
            new Client
            {
                ClientId = "employees",
                ClientSecrets = new [] { new Secret("supersecret".Sha512()) },
                AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                AllowedScopes = { IdentityServerConstants.StandardScopes.OpenId, "employeeapi.read", "employeeapi.write" }
            }
        };

        public static IEnumerable<ApiScope> GetApiScopes() =>
        new []
        {
            new ApiScope("employeeapi.read"),
            new ApiScope("employeeapi.write"),
        };

        public static IEnumerable<ApiResource> GetApiResources() => new[]
        {
            new ApiResource("employees")
            {
                Scopes = new List<string> { "employeeapi.read", "employeeapi.write" },
                ApiSecrets = new List<Secret> { new Secret("scopesecret".Sha256()) },
                UserClaims = new List<string> {"role"}
            }
        };
    }
}