import React from "react";
import styled from "styled-components"

const Paginationcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <Paginationcontainer>
            <button onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>▶️</div></button>
        </Paginationcontainer>
    )
}

export default Pagination;