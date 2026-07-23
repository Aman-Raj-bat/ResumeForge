import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  resumes: [],
  currentResume: null,
  isLoading: false,
  saveStatus: 'saved', // 'saved', 'saving', 'error'

  setResumes: (resumes) => set({ resumes }),
  setCurrentResume: (resume) => set({ currentResume: resume }),
  setLoading: (isLoading) => set({ isLoading }),
  setSaveStatus: (status) => set({ saveStatus: status }),
  
  updateResumeInList: (updatedResume) => set((state) => ({
    resumes: state.resumes.map((r) => r._id === updatedResume._id ? updatedResume : r)
  })),
  
  addResumeToList: (newResume) => set((state) => ({
    resumes: [newResume, ...state.resumes]
  })),

  removeResumeFromList: (id) => set((state) => ({
    resumes: state.resumes.filter((r) => r._id !== id)
  })),
}));
