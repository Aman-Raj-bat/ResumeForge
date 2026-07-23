import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  resumes: [],
  activeResumeId: null,
  saveStatus: 'saved', // 'saved', 'saving', 'error'

  setResumes: (resumes) => set({ resumes }),
  setActiveResumeId: (id) => set({ activeResumeId: id }),
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
