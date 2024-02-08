import React from "react"

const Searchbar=({value,handleSearchKey,clearSearch,formSubmit})=>(
        <div className="searchbar__Wrap">
            <form onSubmit={formSubmit}>
                <input type="text"
                 placeholder="search by Category" 
                 value={value} 
                 onChange={handleSearchKey} />

                {value && <span onClick={clearSearch}>X</span>}

                <button>Go</button>
            </form>
        </div>
    

)
export default Searchbar