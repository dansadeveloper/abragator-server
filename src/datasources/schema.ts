import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getSubreddit(subreddit: String!, ranking: String,
      time: String, limit: String,
      count: String, after: String, before: String): SubOrigin
    getFrontpage: [Post]
    getUser(userId: String!): User
    getPost(postId: String!): Post
  }

  type Mutation {
    upvote(postId: String): Post
    downvote(postId: String): Post
    submitSelfPost(subreddit: String, title: String, text: String): Post
    submitLinkPost(subreddit: String, title: String, url: String): Post
    submitComment(parent: String, text: String): Post
    hidePost(postId: String): Post
    unhidePost(postId: String): Post
  }

  type User {
    id: ID!
    name: String!
    creationDate: Int
    commentKarma: Int
    postKarma: Int
    isFriend: Boolean
    posts(sortType: String, time: String, limit: Int, count: Int, after: String): [Post]
    comments(sortType: String, time: String, limit: Int, count: Int, after: String): [Post]
    source: String
  }

  type SubOrigin {
    id: ID!
    name: String!
    isNSFW: Boolean
    description: String
    recommendedSubs: [SubOrigin]
    posts(sortType: String,  ranking: String, time: String, limit: String,
      count: String, after: String, before: String): [Post]
    mods: [User]
    wiki: [WikiPage]
    bannerImage: String
    bannerBackgroundColor: String
    primaryColor: String
    keyColor: String
  }

  type WikiPage {
    id: ID!
    name: String!
    content: String
  }

  type Post {
    id: ID!
    title: String!
    author: User!
    upvotes: Int
    downvotes: Int
    postType: PostType
    mediaType: MediaType
    isNSFW: Boolean!
    mediaURL: String
    postURL: String!
    sticky: Boolean!
    saved: Boolean
    cached: Boolean
    hidden: Boolean
    clicked: Boolean
    archived: Boolean
    quarantine: Boolean
    duplicates(limit: Int, count: Int, after: String): [Post]
    children(sortType: String, time: String, limit: Int, count: Int, after: String): [Post]
    silver: Int
    gold: Int
    platinum: Int
    text: String
    modNote: String
    modPost: Boolean
    adminPost: Boolean
  }

  enum PostType {
    TEXT
    LINK
    COMMENT
    MESSAGE
  }

  enum MediaType {
    IMAGE
    VIDEO
    AUDIO
  }
`;

export default typeDefs;
