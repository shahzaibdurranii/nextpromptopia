"use client";
import {useState} from 'react'
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import Form from '@components/Form' ;

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt:'' ,
    tag:'',
  });
  const createPrompt = async (e)=>{
    e.preventDefault();
    setSubmitting(true);
    try{}
  }
  return (
    <Form
    type = "Create"
    post = {post}
    setPost = {setPost}
    submitting = {submitting}
    handleSubmit = {createPrompt}

    />
  )
}

export default CreatePrompt