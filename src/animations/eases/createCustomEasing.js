import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export function createCustomEase() {
  CustomEase.create(
    "spatial-default",
    "M0,0 C0.38,1.21 0.22,1.00 1,1"
  );
}