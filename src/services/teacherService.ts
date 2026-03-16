import { supabase } from '@/lib/supabase'
import type { Teacher } from '@/types/teacher'

export const teacherService = {
  async getTeachers(): Promise<Teacher[]> {
    const { data, error } = await supabase.from('teachers').select('*').order('order_index')

    if (error) throw error

    return data as Teacher[]
  },
}
