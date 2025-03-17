function Pagination({pageNext,pagePrev,page}){
    return(
        <div className='bg-black p-4 h-[50px] w-full flex justify-center'>
        <div onClick={pagePrev} className='px-8 text-white'><i class="fa-solid fa-arrow-left"></i></div>
        <div className="text-white">{page}</div>
        <div onClick={pageNext} className='px-8 text-white'><i class="fa-solid fa-arrow-right"></i></div>
      </div>
    )
}

export default Pagination;