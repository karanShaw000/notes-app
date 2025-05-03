import axiosInstance, { handleAxiosError } from "@/lib/axiosInstance";
import { ApiResponse, Note } from "@/lib/types";

export const getAllNotes = async () => {
  try {
    const res = await axiosInstance.get<ApiResponse<{ notes: Note[] }>>("/notes");
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

export const createNote = async (noteData: Pick<Note, "title" | "content">) => {
  try {
    const res = await axiosInstance.post<ApiResponse<{ note: Note }>>("/notes", noteData);
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};


