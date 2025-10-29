import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function getById(id) {
  let task = await prisma.task.findUnique({
    where: { id: id },
    select: {
      id: true,
      title: true,
      completed: true
    }
  });
  return task;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}