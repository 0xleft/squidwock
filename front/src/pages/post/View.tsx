import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { loadPost } from "../../lib/Posts"

function PostView() {
  const navigate = useNavigate()
  const params = useParams<{ id : string }>()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchedPost = loadPost(params.id)

    if (fetchedPost) {
      setPost(fetchedPost)
    } else {
      navigate("/404")
    }
  }, [])

  return (
    <>
    </>
  )
}

export default PostView