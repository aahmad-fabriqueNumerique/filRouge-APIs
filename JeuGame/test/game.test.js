const assert = require('assert');
const axios=require('axios').default;
const baseURL='http://localhost:3045';
// console.log(game);
describe('question', function() {
    it('should retun number of questions', async ()=>{
        const res= await axios.get(`${baseURL}/items/`)

        console.log('res', res) // res.data

        assert.equal(res.data.length, 5)

        // assert.equal(res ,1959,'vaut 10.0')

    })
   
    it('should return exist', async()=>{
        const res = await axios.get(`${baseURL}/items/1`)
        console.log('res', res)
        assert.equal(res.data.id,1)
    })
    it('should return exist 2', async()=>{
        const res = await axios.get(`${baseURL}/items/2`)
        console.log('res', res)
        assert.equal(res.data.id, 2)
    })
     it('should return type of data ',async()=>{
        const res = await axios.get(`${baseURL}/items/1`)
        console.log('res', res)
        assert.equal(typeof(res.data),"object")
    })
    it('should return type', async()=>{
        const res = await axios.get(`${baseURL}/items/1`)
        console.log('res', res)
        assert.equal(res.data.type, 
        'QCM')
    })
    it('should return question value', async()=>{
        const res = await axios.get(`${baseURL}/items/4`)
        console.log('res', res)
        assert.equal(res.data.question, 
        'Qui a inventé la souris?')
    }
    )
    it('should return reponse question', async()=>{
        const res = await axios.get(`${baseURL}/items/4`)
        console.log('res', res)
        assert.equal(res.data.reponsejuste, 
        'Douglas EngelBarth')
    }
    )
//    find fonctionne donc createion du get et get/:id voire delete/:id peut fonctionner?
it('should return reponse delete', async()=>{
    const res = await axios.delete(`${baseURL}/items/5`)
    console.log('res', res)
    assert.equal(res.data.id, 
    '5')
}
)
it('should return response ',async()=>{
    const res =await axios.get(`${baseURL}/items/`)
    console.log(res);
    assert.equal(res.data.length,4)
})
    
})