import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rrlsvpeehkgwrlpuylek.supabase.co";
const supabaseKey = "sb_publishable_Olc66Vyen5W5LVIt3EMuZA_t_4JZ6No";


export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);