import './SnackBar.css'

const SnackBar = ({children}) => {
    return (
        <div className="snackbar-custom">
              
            {children}      
        </div>
    )
}
export default SnackBar