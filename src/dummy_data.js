export const fetch_thread = (id) => {
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    if (thread.id === Number(id)) {
      return thread;
    }
  }
  return { title: '', discription: '' };
};

export const fetch_comments = (id) => {
  let out_comments = [];
  comments.forEach((comment) => {
    if (comment.threadId === Number(id)) {
      out_comments.push(comment);
    }
  });
  return out_comments;
};
export const threads = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit obcaecati dolorum sit atque temporibus repellendus reprehenderit in, ea dicta ut deleniti quo alias adipisci ipsum harum. Pariatur, ullam minus.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit obcaecati dolorum sit atque temporibus repellendus reprehenderit in, ea dicta ut deleniti quo alias adipisci ipsum harum. Pariatur, ullam minus.',
  },
];

export const comments = [
  {
    id: 1,
    threadId: 1,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti?',
  },
  {
    id: 2,
    threadId: 1,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti?',
  },
  {
    id: 3,
    threadId: 2,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti?',
  },
  {
    id: 4,
    threadId: 2,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti?',
  },
];
