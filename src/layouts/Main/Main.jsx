import './Main.scss'

const Content = (props) => {
   const { children } = props


   return (
      <main className='main'>
         {children}
      </main>
   )
}
export default Content