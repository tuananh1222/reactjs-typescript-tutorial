import React from 'react'
import PropTypes from 'prop-types'

function Pagination(props) {
    const { pagination, onPageChange } = props;

    const { _page, _limit, _totalRows } = pagination;

    const _totalPage = Math.ceil(_totalRows / _limit);
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>
            <button
                disabled={_page >= _totalPage}
                onClick={() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    )
}

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
}
Pagination.defaultProps = {
    onPageChange: null
}
export default Pagination

