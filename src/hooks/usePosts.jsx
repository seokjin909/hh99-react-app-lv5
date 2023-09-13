import { useMutation, useQuery, useQueryClient } from "react-query";
import { addPosts, deletePosts, getPosts, updatePosts } from "../api/posts";

export default function usePosts() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery(["posts"], getPosts);
  const addPost = useMutation(({ post, url, userId }) => addPosts(post, url, userId), {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  const updateFetchPost = useMutation((data) => updatePosts(data), {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  const deletePost = useMutation((id) => deletePosts(id), {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  return { postsQuery, addPost, updateFetchPost, deletePost };
}
