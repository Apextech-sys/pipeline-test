import TaskList from '@/components/TaskList'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        My Task List
      </h1>
      <TaskList />
    </main>
  )
}
