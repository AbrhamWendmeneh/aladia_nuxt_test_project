<template>
  <div>
    <Header />
    <Product />
    <Explore />
    <CourseContent />
    <Description />
    <FrequentBought />
    <FrequentBoughtTeacher />
    <Instructor />
    <Rating />
    <MoreCourses />
    <Footer ref="footer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";
import Explore from "./components/Explore.vue";
import CourseContent from "./components/CourseContent.vue";
import FrequentBought from "./components/FrequentBought.vue";
import Description from "./components/Description.vue";
import FrequentBoughtTeacher from "./components/FrequentBoughtTeacher.vue";
import Instructor from "./components/Instructor.vue";
import Rating from "./components/Rating.vue";
import MoreCourses from "./components/MoreCourses.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Product,
    Explore,
    CourseContent,
    FrequentBought,
    Description,
    FrequentBoughtTeacher,
    Instructor,
    Rating,
    MoreCourses,
    Footer,
  },
};
</script>
