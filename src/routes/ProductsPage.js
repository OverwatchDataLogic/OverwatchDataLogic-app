import { connect } from 'dva'
import ProductList from '../components/ProductList'

const ProductsPage = ({ dispatch, list, onDelete }) => {
  return <ProductList onDelete={onDelete} products={list} />
}

function mapStateToProps(state, ownProps) {
  const { list } = state.products
  return {
    list
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: id => {
      dispatch({
        type: 'products/delete',
        payload: id
      })
    }
  }
}

ProductsPage.prototype = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
