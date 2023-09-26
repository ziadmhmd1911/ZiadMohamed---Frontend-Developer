import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCapsules } from '@services';

export const fetchCapsules = createAsyncThunk<{ capsules: any[] }>(
  "fetchCapsules",
  async () => {
    const data = await getCapsules();
    return {
      capsules: data,
    };
  }
);
