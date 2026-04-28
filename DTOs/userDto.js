export const toUserDTO = (user) => {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image
    }
}

