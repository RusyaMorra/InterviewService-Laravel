

const Pagination = function ({totalPageArray, changePosts, page}) {

  

    return(
      
        <div className = "pagination">
            {totalPageArray.map(pageCount=> 
                <button 
                onClick = {()=>changePosts(pageCount)}
                className = {page === pageCount?'page__current pagePugination': 'pagePugination'}
                Mykey = {pageCount}>{pageCount}
                </button>
            ) }
        </div>
    )


}


export default Pagination