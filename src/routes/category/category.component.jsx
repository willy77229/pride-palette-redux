import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCatogiesMap } from "../../store/categories/category.selector";
import { CategoryTitle, CategoryContainer } from  "./category.styles";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCatogiesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;