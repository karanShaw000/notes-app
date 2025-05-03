export interface Note {
  _id: string,
  title: string,
  content: string,
  createdAt: string,
}

export interface ApiResponse<T = undefined> {
  message: string,
  data?: T
}

