/**
 * Same thing as /utils/supabase/component.ts for pages/-type app
 */


import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
  )
}
