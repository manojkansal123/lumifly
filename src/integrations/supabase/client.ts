
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nriynhtfywhskegbwvcw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaXluaHRmeXdoc2tlZ2J3dmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjUwNjcsImV4cCI6MjA2MDY0MTA2N30.JlnfYIDh-0awRyaujdKQxn-Y_YoKnyOKEgSugZ379QI";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
