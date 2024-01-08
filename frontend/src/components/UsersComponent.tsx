import Users from './Users'
import Nav from './Nav'

const UsersComponent = () => {
  return (
    <div className='flex justify-between gap-24'>
      <div className='w-1/5'>
        <Nav active={1}/>
      </div>
      
      <Users />
    </div>
  )
}

export default UsersComponent