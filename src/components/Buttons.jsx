import PropTypes from 'prop-types';

const Buttons = ({ label, iconURL}) => {
    return (
        <button className=" flex justify-center items-center gap-2 font-montserrat text-lg leanding-none px-7 py-4 bg-coral-red rounded-full text-white border-coral-red ">
            {label}
            <img
                src={iconURL}
                alt="arrow-right"
                width={20}
                height={20}
                className='ml-2 rounded-full'
            />
        </button>
    )
}

Buttons.propTypes = {
    label: PropTypes.string.isRequired,
    iconURL: PropTypes.string
};

export default Buttons
