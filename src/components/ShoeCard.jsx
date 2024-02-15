const ShoeCard = ({ imgUrl, changeImg, shoeImg }) => {
  const handleClick = () => {
    if (shoeImg !== imgUrl.bigShoe) {
      changeImg(imgUrl.bigShoe)
    }
  }

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        shoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard
