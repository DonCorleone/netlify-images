export interface GoTrueUser {
  url: string
  token: Token
  id: string
  aud: string
  role: string
  email: string
  confirmed_at: string
  app_metadata: AppMetadata
  user_metadata: UserMetadata
  created_at: string
  updated_at: string
}

export interface Token {
  access_token: string
  expires_in: string
  refresh_token: string
  token_type: string
  expires_at: number
}

export interface AppMetadata {
  provider: string
}

export interface UserMetadata {
  avatar_url: string
  full_name: string
}
