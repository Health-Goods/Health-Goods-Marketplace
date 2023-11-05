// Dependencies
import { createClient } from '@supabase/supabase-js';

// Create an instance of database using the URL and API_KEY in .env file
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

export default supabase;