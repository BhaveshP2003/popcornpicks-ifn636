const chai = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const Task = require('../models/Task');
const {
  addTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const { expect } = chai;

describe('Task Controller Tests', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('AddTask Function Test', () => {
    it('should create a new task successfully', async () => {
      const req = {
        user: { id: new mongoose.Types.ObjectId() },
        body: {
          title: 'New Task',
          description: 'Task description',
          deadline: '2025-12-31'
        }
      };

      const createdTask = {
        _id: new mongoose.Types.ObjectId(),
        ...req.body,
        userId: req.user.id
      };

      const createStub = sinon.stub(Task, 'create').resolves(createdTask);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await addTask(req, res);

      expect(createStub.calledOnceWith({
        userId: req.user.id,
        ...req.body
      })).to.be.true;
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(createdTask)).to.be.true;
    });

    it('should return 500 if an error occurs', async () => {
      sinon.stub(Task, 'create').throws(new Error('DB Error'));

      const req = {
        user: { id: new mongoose.Types.ObjectId() },
        body: {
          title: 'New Task',
          description: 'Task description',
          deadline: '2025-12-31'
        }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await addTask(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'DB Error' })).to.be.true;
    });
  });

  describe('GetTasks Function Test', () => {
    it('should return all tasks for the given user', async () => {
      const req = {
        user: { id: new mongoose.Types.ObjectId() }
      };

      const tasks = [
        { _id: new mongoose.Types.ObjectId(), title: 'Task 1', userId: req.user.id },
        { _id: new mongoose.Types.ObjectId(), title: 'Task 2', userId: req.user.id }
      ];

      const findStub = sinon.stub(Task, 'find').resolves(tasks);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getTasks(req, res);

      expect(findStub.calledOnceWith({ userId: req.user.id })).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(tasks)).to.be.true;
    });

    it('should return 500 if an error occurs while fetching tasks', async () => {
      sinon.stub(Task, 'find').throws(new Error('DB Error'));

      const req = {
        user: { id: new mongoose.Types.ObjectId() }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getTasks(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'DB Error' })).to.be.true;
    });
  });

  describe('GetTask Function Test', () => {
    it('should return a task successfully', async () => {
      const taskId = new mongoose.Types.ObjectId();

      const req = {
        params: { id: taskId.toString() }
      };

      const task = {
        _id: taskId,
        title: 'Single Task'
      };

      const findByIdStub = sinon.stub(Task, 'findById').resolves(task);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getTask(req, res);

      expect(findByIdStub.calledOnceWith(req.params.id)).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(task)).to.be.true;
    });

    it('should return 404 if task is not found', async () => {
      sinon.stub(Task, 'findById').resolves(null);

      const req = {
        params: { id: new mongoose.Types.ObjectId().toString() }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getTask(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'Task not found' })).to.be.true;
    });

    it('should return 500 if an error occurs while fetching a task', async () => {
      sinon.stub(Task, 'findById').throws(new Error('DB Error'));

      const req = {
        params: { id: new mongoose.Types.ObjectId().toString() }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getTask(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'DB Error' })).to.be.true;
    });
  });

  describe('UpdateTask Function Test', () => {
    it('should update a task successfully', async () => {
      const taskId = new mongoose.Types.ObjectId();

      const req = {
        params: { id: taskId.toString() },
        body: {
          title: 'Updated Task',
          description: 'Updated description'
        }
      };

      const updatedTask = {
        _id: taskId,
        ...req.body
      };

      const updateStub = sinon.stub(Task, 'findByIdAndUpdate').resolves(updatedTask);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await updateTask(req, res);

      expect(updateStub.calledOnceWith(req.params.id, req.body, { new: true })).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(updatedTask)).to.be.true;
    });

    it('should return 404 if task to update is not found', async () => {
      sinon.stub(Task, 'findByIdAndUpdate').resolves(null);

      const req = {
        params: { id: new mongoose.Types.ObjectId().toString() },
        body: { title: 'Updated Task' }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await updateTask(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'Task not found' })).to.be.true;
    });

    it('should return 500 if an error occurs while updating', async () => {
      sinon.stub(Task, 'findByIdAndUpdate').throws(new Error('DB Error'));

      const req = {
        params: { id: new mongoose.Types.ObjectId().toString() },
        body: { title: 'Updated Task' }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await updateTask(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'DB Error' })).to.be.true;
    });
  });

  describe('DeleteTask Function Test', () => {
    it('should delete a task successfully', async () => {
      const taskId = new mongoose.Types.ObjectId();

      const req = {
        params: { id: taskId.toString() }
      };

      const deletedTask = {
        _id: taskId,
        title: 'Task to delete'
      };

      const deleteStub = sinon.stub(Task, 'findByIdAndDelete').resolves(deletedTask);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await deleteTask(req, res);

      expect(deleteStub.calledOnceWith(req.params.id)).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'Task deleted' })).to.be.true;
    });

    it('should return 404 if task to delete is not found', async () => {
      sinon.stub(Task, 'findByIdAndDelete').resolves(null);

      const req = {
        params: { id: new mongoose.Types.ObjectId().toString() }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await deleteTask(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'Task not found' })).to.be.true;
    });

    it('should return 500 if an error occurs while deleting', async () => {
      sinon.stub(Task, 'findByIdAndDelete').throws(new Error('DB Error'));

      const req = {
        params: { id: new mongoose.Types.ObjectId().toString() }
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await deleteTask(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWithMatch({ message: 'DB Error' })).to.be.true;
    });
  });

});
