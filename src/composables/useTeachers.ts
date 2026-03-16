import { ref, onMounted } from 'vue'
import { teacherService } from '@/services/teacherService'
import type { Teacher } from '@/types/teacher'

export function useTeachers() {
  const teachers = ref<Teacher[]>([])
  const loading = ref(true)

  const fetchTeachers = async () => {
    teachers.value = await teacherService.getTeachers()
    loading.value = false
  }

  onMounted(fetchTeachers)

  return {
    teachers,
    loading,
  }
}
