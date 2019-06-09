import React from 'react'
import Service from "../service";
const service = new Service();

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
      const pathname = window.location.pathname
      const paths = pathname.split('/')
      this.username = paths[2]
      console.log(this.username + " in profile")

      this.state = {
        user: service.findUserByUsername(this.username)
      }
    }

    render() {
      return(
          <div>
          <br/>
          <h1>User Profile</h1>
            <br/>
            <h3>
              Welcome {this.username} !
            </h3>


            <br/>
            <h3>
              Role: {this.state.user.role}
            </h3>


            <br/>
            <h3>
              BookList:
            </h3>
            <ul className='list-group'>

              {/*uncomment the following code once you can get user data from database*/}
              {/*{this.state.user.bookList.map(book => <li className='list-group-item'>*/}
              {/*  book*/}
              {/*</li>)}*/}
            </ul>
          </div>
      )
    }


    //     let display = ''
    //     if(display) {
    //         return (
    //             <div className="login-page">
    //                 <div>
    //                     <h3>user name</h3>
    //                 </div>
    //                 <h4 className="mt-3">Book list: </h4>
    //                 <div>
    //                     <ul className="list-group">
    //
    //                         <li className="list-group-item text-center">
    //                             hey
    //                         </li>
    //
    //
    //                         <li className="list-group-item text-center">
    //                             hey
    //                         </li>
    //
    //
    //                     </ul>
    //                 </div>
    //             </div>
    //
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 widgets
    //             </div>
    //         )
    //     }
    //
    // }

}

export default UserProfile

