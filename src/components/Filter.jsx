import React from 'react'

export const Filter = ({tema,handleSubmit,handleInputChange,value}) => {
    return (
        <div className="filter">
                <div ClassName="box-filter">
                    <h1 className={ tema? "title-filter-dark" : "title-filter-light"}>¡Inspirate y busca los mejores <span className="bold">GIFS!</span></h1>
                    <img src= "\Images\ilustra_header.svg" alt="img-filter" />
                    <form onSubmit={handleSubmit}>
    
                        <input 
                            type="text" 
                            placeholder="Buscar gifs"
                            value={value}
                            onChange={handleInputChange}
                            className={tema? "filter-input-dark" : "filter-input-light"}
                         />

                        <div className={tema? "filter-input-dark box-input-img-filter" : "filter-input-light box-input-img-filter"} onClick={handleSubmit}>
                            <img src="/images/icon-search-mod-noc.svg" alt=""/>
                        </div>
                    </form>
                </div>
         </div>
    )
}
