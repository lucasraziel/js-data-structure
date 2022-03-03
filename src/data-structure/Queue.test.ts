import Queue from './Queue';

describe('Queue', ()=>{
    it('should create an object of type Queue', ()=>{
        const queue = new Queue();

        expect(queue).toBeInstanceOf(Queue);
    })
})