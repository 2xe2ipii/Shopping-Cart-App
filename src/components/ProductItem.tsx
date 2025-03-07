import React from "react";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Product } from "../data/products";

interface ProductItemProps {
  product: Product;
  onAddToCart?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
  quantity?: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onAddToCart,
  onIncrease,
  onDecrease,
  quantity,
}) => {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={600}
      easing="ease-in-out"
      iterationCount={1}
      useNativeDriver
      style={styles.container}
    >
      <Pressable
        style={({ pressed }) => [
          styles.card,
          { transform: [{ scale: pressed ? 0.98 : 1 }] },
        ]}
      >
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.sold}>{product.sold} sold</Text>
        </View>

        {onAddToCart && (
          <Animatable.View
            animation="fadeIn"
            duration={400}
            style={styles.buttonContainer}
          >
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.8 : 1 },
              ]}
              onPress={onAddToCart}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
          </Animatable.View>
        )}

        {onIncrease && onDecrease && quantity !== undefined && (
          <View style={styles.quantityContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.quantityButton,
                { opacity: pressed ? 0.8 : 1 },
              ]}
              onPress={onDecrease}
            >
              <Text style={styles.quantityButtonText}>−</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable
              style={({ pressed }) => [
                styles.quantityButton,
                { opacity: pressed ? 0.8 : 1 },
              ]}
              onPress={onIncrease}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
          </View>
        )}
      </Pressable>
    </Animatable.View>
  );
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 16;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    margin: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: CARD_WIDTH,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff6b6b",
    marginBottom: 4,
  },
  sold: {
    fontSize: 12,
    color: "#666666",
  },
  buttonContainer: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  button: {
    backgroundColor: "#ff6b6b",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  quantityButton: {
    backgroundColor: "#ff6b6b",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
});
