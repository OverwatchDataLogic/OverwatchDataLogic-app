import { connect } from 'dva'
import uuidv1 from 'uuid/v1'
import ProductList from '../../components/ProductList'

const ProductsPage = ({ dispatch, products, onDelete, onCreate, onUpdate }) => {
  return (
    <ProductList
      onDelete={onDelete}
      onCreate={onCreate}
      onUpdate={onUpdate}
      products={products}
    />
  )
}

function mapStateToProps(state, ownProps) {
  const { list } = state.products
  return {
    products: list
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: id => {
      dispatch({
        type: 'products/delete',
        payload: id
      })
    },
    onCreate: () => {
      dispatch({
        type: 'products/create',
        payload: { id: uuidv1(), name: 76 }
      })
    },
    onUpdate: payload => {
      dispatch({
        type: 'products/update',
        payload: {
          id: '915fe890-fcc8-11e7-b75a-a9fc5503fcc1',
          name: '改变了' + uuidv1()
        }
      })
    }
  }
}

ProductsPage.prototype = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
