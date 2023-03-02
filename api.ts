import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const API_URL = 'https://api.lens.dev'

/* create the API client */
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

/* define a GraphQL query  */
export const Profiles = gql`
query Profiles {
    profiles(request: { ownedBy: [
    "0x43Ef5625D09CBB25d79aaCb78AF592272BdfE231",
    "0x43ddf2bf7b0d2bb2d3904298763bca2d3f2b40e0",
    "0x846de36bce0904f6c166d34749c825816ca0dbed",
    "0x338886a166fab594f514fc411d17a757c6b86b92",
    "0x7f88056df3ddd3a52d7055d25f1a8bd2b880a09a",
    "0x3e0cf03f718520f30300266dcf4db50ba12d3331",
    "0x4469c363dd7c9e9a068d0a8ba1c6161ba8dd4232",
    "0xbbc9368898422cc9ffabef8ea66210d3d011512f",
    "0x7b790240cedd26d8a453b289bbb453cb21b4d29c",
    "0x885a5f25ad52902f42526a442beb58cd3eaf0b84",
    "0xe47ed204b63adfb80c90082c088fc2a430f9a558",
    "0x7e5f4b34d239097688267c696e3c5294e05800e2",
    "0x943b71dd451daa8097bc2ad6d4afb7517cb4cf3f",
    "0xbc4cf78188a5c64a994cc17a4f5f3c70934f0f5a",
    "0xc84c580cd75e0c4e1291f074bcb4499c6c3e784c",
    "0x09d51121bb34606ca8e8b9fdfc60227a213f8729",
    "0xdc4395fc171c0dacc4ca685aa054b10dec8ffc8d",
    "0xc53e74d0ad1601ac02e2e1bc71823819512f9192",
    "0x9fb7e6c09a8cf8da8b3d13901999af869c76e564",
    "0x77f8edc138d603a6efd96eb7ec8fa38655e612a4",
    "0xf6b6f07862a02c85628b3a9688beae07fea9c863",
    "0x7bf49814598924b1ab2a33ad815054b6367cddd0",
    "0x8ec94086a724cbec4d37097b8792ce99cadcd520",
    "0xd7b47b8bc490724da2f022b61eecb57b146ea8fc",
    "0x03dbe28293adf4643d2be5f3c8397384b51bc612",
    "0x48a63d53c392c8a1c4c926b73cca573c5ec2cb31",
    "0xa730f0255f61e54f999852afb1783a77aaf9ee15",
    "0x2f769a7578ca81b48acacd5a5db2192e67366854",
    "0x5b2f788be5e94ebe18e35abe416f80d6de2ea075",
    "0x7c5b2accae16ce0daeeda95f0443c5be95ab8269",
    "0xedc0d1e098e466a683f04c6b5314a0736b5de91b",
    "0x3a719853630f73b7d3527c36d515dd38245468c7",
    "0x39e29dc5293568abb38d19631374196548ed6cea",
    "0xcc7e2cdc714c06f6fafb8044eb0ca35dad193eff",
    "0xd3299cc47f1afb07e06bbf9c812cc954ed75e6cc",
    "0xbb32736429374a891fc7524a0d9e769504e8caa6",
    "0x90299ec59b94398a3a31a795bc585f743d0e5cc9",
    "0xd6bc5e228f7e564c7a6519b8912a918b966de99e",
    "0xff349579c8e5f26c6b9ad3841a9dea223cc170eb",
    "0x6c965b656c450259a6d4d95a2e68fb4319eecbc0",
    "0x74e54695c03980c028c50a43e15a0821b6af6f24",
    "0x6b9faaa1b0d05773e6a962094e3c4bb5534aaa6f",
    "0x41d96cde876e0fb897b507633eeb83ae15f1ac92",
    "0x900603f9376a0f19ac3212a1950d82412e01854f",
    "0x3c4bc03c4d80166cddee118b3972d3352603d684",
    "0x274510df99810ab69fdd4369c72430a62d03c0d6",
    "0x6926dbc198a99a47375d085dbc980c4312214374",
    "0x135907936537a44763817ac7fc30abaec9a81fab",
    "0x662fb0d2a41538dac54697e0980b4b5f1c5840a8",
    "0xe100d8f8d0c8922d7869dc10d08a7eda96368b2d"

    ], limit: 50 }) {
          items {
        id
        name
        bio
        handle
        picture {
          ... on MediaSet {
            original {
              url
            }
          }
        }
        stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
        }
      }
    }
  }
`