

import NavCategory from './NavCategory';


function Categorylist(props) {
const {setCount,count}=props
        return (


                <>
                        <div className="d-flex align-items-center category-items">
                                <NavCategory setCount={setCount}  count={count} />

                        </div>


                </>

        )
}

export default Categorylist;