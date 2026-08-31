import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jmqhomedvifiriheayye.supabase.co';
const supabaseKey = 'sb_publishable_tslL1mmrbxkFv4DiGhPOnQ_yUmP3ojT';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);