/**
 * Same thing as /utils/supabase/component.ts for pages/-type app
 */


import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY!
  )
}
