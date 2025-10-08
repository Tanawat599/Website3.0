"use client"
import { useEffect, useState } from "react"
import { supabase } from "./supabaseClient"

type Project = {
  id: number
  name: string
  image: string
  description: string
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    const { data, error } = await supabase.from("project").select("*")
    if (error) console.error("❌ Error fetching data:", error)
    else {
      console.log("✅ Fetched data:", data)
      setProjects(data)
    }
  }

  console.log("Rendering projects:", projects)

  if (projects.length === 0) return <p>กำลังโหลดข้อมูล...</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {projects.map((p) => (
        <div key={p.id} className="border rounded-xl shadow p-4 bg-white">
          <img src={p.image} alt={p.name} className="rounded-lg mb-3 w-full h-40 object-cover" />
          <h2 className="font-semibold text-lg">{p.name}</h2>
          <p className="text-gray-600 text-sm">{p.description}</p>
        </div>
      ))}
    </div>
  )
}
