-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 16, 2024 at 07:14 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elearniv_nextjs14`
--

-- --------------------------------------------------------

--
-- Table structure for table `Account`
--

CREATE TABLE `Account` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `providerAccountId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_token` text COLLATE utf8mb4_unicode_ci,
  `expires_at` int(11) DEFAULT NULL,
  `token_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scope` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_token` text COLLATE utf8mb4_unicode_ci,
  `session_state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Asset`
--

CREATE TABLE `Asset` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `lecture_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `asset_zip` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Asset`
--

INSERT INTO `Asset` (`id`, `courseId`, `lecture_name`, `asset_zip`, `created_at`, `updated_at`) VALUES
(1, 1, 'Project catelog', 'https://res.cloudinary.com/dev-empty/raw/upload/v1712122501/g6gnhpql65wzaynmvglq.zip', '2024-04-03 05:35:05.530', '2024-04-03 05:35:05.530');

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Web Development', 'web-development', '2024-02-06 07:17:13.567', '2024-02-06 07:17:13.567'),
(2, 'App Development', 'app-development', '2024-02-06 07:17:13.567', '2024-02-06 07:17:13.567'),
(3, 'Mobile', 'mobile', '2024-02-06 07:17:13.567', '2024-04-08 05:57:26.764'),
(4, 'IT Certifications', 'it-certifications', '2024-04-16 03:10:24.787', '2024-04-16 03:10:24.787'),
(5, 'Finance & Accounting', 'finance-accounting', '2024-04-16 06:06:21.447', '2024-04-16 06:06:21.447'),
(6, 'IT & Software', 'it-software', '2024-04-16 06:06:31.926', '2024-04-16 06:06:31.926'),
(7, 'Office Productivity', 'office-productivity', '2024-04-16 06:06:47.686', '2024-04-16 06:06:47.686'),
(8, 'Personal Development', 'personal-development', '2024-04-16 06:07:00.441', '2024-04-16 06:07:00.441'),
(9, 'Design', 'design', '2024-04-16 06:07:10.479', '2024-04-16 06:07:10.479'),
(10, 'Marketing', 'marketing', '2024-04-16 06:07:27.089', '2024-04-16 06:07:27.089'),
(11, 'Lifestyle', 'lifestyle', '2024-04-16 06:07:38.579', '2024-04-16 06:07:38.579'),
(12, 'Photography & Video', 'photography-video', '2024-04-16 06:07:51.034', '2024-04-16 06:07:51.034'),
(13, 'Health & Fitness', 'health-fitness', '2024-04-16 06:08:00.897', '2024-04-16 06:08:00.897'),
(14, 'Music', 'music', '2024-04-16 06:08:10.530', '2024-04-16 06:08:10.530'),
(15, 'Teaching & Academics', 'teaching-academics', '2024-04-16 06:08:22.773', '2024-04-16 06:08:22.773');

-- --------------------------------------------------------

--
-- Table structure for table `Coupon`
--

CREATE TABLE `Coupon` (
  `id` int(11) NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` double NOT NULL,
  `exp_date` datetime(3) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `active_for_full_site` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Coupon`
--

INSERT INTO `Coupon` (`id`, `code`, `discount`, `exp_date`, `status`, `deleted_at`, `active_for_full_site`, `created_at`) VALUES
(3, 'FEB25', 25, NULL, NULL, NULL, 0, '2024-04-08 06:40:48.479');

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `catId` int(11) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `overview` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `regular_price` double DEFAULT NULL,
  `before_price` double DEFAULT NULL,
  `is_free` tinyint(1) NOT NULL DEFAULT '0',
  `lessons` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_time` enum('Lifetime','Three_Months','Six_Months','One_Year') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Lifetime',
  `requirements` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `what_you_will_learn` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `who_is_this_course_for` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `in_home_page` tinyint(1) NOT NULL DEFAULT '0',
  `is_class` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Course`
--

INSERT INTO `Course` (`id`, `userId`, `catId`, `title`, `slug`, `overview`, `regular_price`, `before_price`, `is_free`, `lessons`, `duration`, `image`, `access_time`, `requirements`, `what_you_will_learn`, `who_is_this_course_for`, `approved`, `in_home_page`, `is_class`, `created_at`, `updated_at`) VALUES
(1, 6, 3, 'The Complete Python Bootcamp', 'the-complete-python-bootcamp', '<p><strong>Become a Python Programmer and learn one of the employer\'s most requested skills of 2023!</strong></p><p>This is the&nbsp;<strong>most comprehensive, yet straightforward, course for the Python programming language on Udemy!</strong>&nbsp;Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will&nbsp;<strong>teach you Python 3.</strong></p><p>With&nbsp;<strong>over 100 lectures</strong>&nbsp;and more than 21 hours of video, this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!</p><p><strong>Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for pieces of information, working with image files, and much more!</strong></p><p>This course will practically teach you Python, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!</p><p>We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we\'ve got you covered.</p>', 100, 199, 0, '156', '22 hours on-demand video', 'https://res.cloudinary.com/dev-empty/image/upload/v1710662546/cbkssvalvathuerbtktl.jpg', 'Lifetime', '<ul><li>Access to a computer with an internet connection.</li><li>step 2 repeat<sup>tm</sup></li></ul>', '<ul><li>You will learn how to leverage the power of Python to solve tasks.</li><li>You will build games and programs that use Python libraries.</li><li>You will be able to use Python for your work problems or personal projects.</li><li>You will create a portfolio of Python-based projects you can share.</li><li>Learn to use Python professionally, learning both Python 2 and Python 3!</li><li>Create games with Python, like Tic Tac Toe and Blackjack!</li><li>Learn advanced Python features, like the collections module, and how to work with timestamps!</li><li>Learn to use Object Oriented Programming with classes!</li><li>Understand complex topics, like decorators.</li><li>Understand how to use both the Jupyter Notebook and create .py files</li><li>Get an understanding of how to create GUIs in the Jupyter Notebook system!</li></ul>', '<ul><li>Beginners who have never programmed before.</li><li>Programmers switching languages to Python.</li><li>Intermediate Python programmers who want to level up their skills!</li></ul>', 1, 1, 0, '2024-03-11 18:12:03.503', '2024-03-20 07:09:13.839'),
(2, 6, 4, 'AWS Certified Cloud Practitioner', 'aws-certified-cloud-practitioner', '<p>If you are new to Amazon Web Services / Cloud Computing and looking to confidently pass your&nbsp;<strong>AWS Cloud Practitioner Certification Exam</strong>&nbsp;- then this AWS&nbsp;training is for you!</p><p>This popular&nbsp;<strong>AWS Cloud Practitioner Training</strong>&nbsp;for the&nbsp;<strong>AWS Certified Cloud Practitioner certification exam&nbsp;</strong>(CLF-C02) is packed with over 12 hours of comprehensive video lessons, hands-on lessons and a full-length practice exam simulation. With our mixture of in-depth theory, architectural diagrams and hands-on training, you\'ll learn how to architect and build applications on&nbsp;<strong>Amazon Web Services</strong>, fully preparing you for the&nbsp;<strong>AWS Cloud Practitioner certification&nbsp;</strong>exam. With this comprehensive&nbsp;<strong>Udemy AWS Cloud Practitioner training</strong>&nbsp;course, you have everything you need to comfortably pass the&nbsp;<strong>AWS Cloud Practitioner certification</strong>&nbsp;exam with confidence.</p><p><strong>HOW THIS COURSE IS DIFFERENT</strong></p><p>We have closely aligned this course with the official&nbsp;<strong>AWS Certified Cloud Practitioner exam guide</strong>&nbsp;and structured the course so that you can study at a pace that suits you best. We start with some basic background to get everyone up to speed on what cloud computing is and its benefits, before progressing through each knowledge domain.</p><p>We are big believers in using practical exercises to improve memory retention and contextualize knowledge, so we have included many guided practical exercises for those who have the time and desire to build a practical skillset. With this ALL-IN-ONE&nbsp;<strong>Udemy AWS cloud practitioner training</strong>, you\'ll be ready to pass the&nbsp;<strong>AWS Cloud Practitioner</strong>&nbsp;exam the first time.</p><p><strong>PREVIEW THIS COURSE</strong></p><p>There are many<strong>&nbsp;FREE&nbsp;previews</strong>&nbsp;so you can see how we prepare you for the AWS&nbsp;Certified Cloud Practitioner (CLF-C02) exam - using a combination of theoretical lectures and guided practical hands-on lessons.</p><p><strong>FOLLOW&nbsp;THE&nbsp;STUDY&nbsp;PLAN&nbsp;TO&nbsp;GET&nbsp;CERTIFIED&nbsp;IN&nbsp;20 DAYS</strong></p><p>You get a&nbsp;<strong>free study guide</strong>&nbsp;in PDF&nbsp;format (optional, requires name/email) to help you plan your study so you can pass your AWS&nbsp;Certified Cloud Practitioner exam in&nbsp;<strong>20 days</strong>! Dedicate around 1 hour every day to studying and you\'ll be ready to earn your first AWS&nbsp;certification in no time at all.</p>', 74, 200, 0, '203', '14h total length', 'https://res.cloudinary.com/dev-empty/image/upload/v1713237750/lmyfyv3n2yaceuw2to5k.jpg', 'Lifetime', '<ul><li>Beginners welcome! This course was designed with non-techies and newcomers to the cloud in mind</li><li>No need for previous AWS cloud experience as we\'ll teach you the foundations of cloud computing</li><li>A free-tier AWS account is recommended to follow along with the practice lessons - we’ll show you step by step how to create one</li></ul>', '<ul><li>MAXIMIZE YOUR TIME EFFICIENCY: Learn at your own pace with theory lectures and guided practical hands-on exercises</li><li>QUIZZES: At the end of each section you get to review your knowledge with a total of 120 unique quiz questions that test your understanding</li><li>ALL DIAGRAMS, CODE AND SLIDES: Available for download in PDF format</li><li>RESPONSIVE SUPPORT: Our team of AWS experts respond to all of your questions, concerns or feedback</li><li>PRESENTED IN A PROFESSIONAL WAY: Focused and to the point, clear language with professional subtitles</li></ul>', '<ul><li>Students preparing for the AWS Certified Cloud Practitioner exam who want to pass with confidence at first attempt</li><li>Candidates for the AWS exam who want to feel fully prepared and master the cloud with this comprehensive ALL-IN-ONE Training Course</li><li>IT Professionals who want to become qualified AWS Cloud Practitioners and enter any AWS technical Job interview with confidence</li><li>Anyone who is keen to take their AWS Cloud Career and salary to the next level with an AWS certification</li><li>Professionals who want to learn how to leverage the benefits of the AWS Cloud to demonstrate strong capability with AWS to (future) employers</li><li>Those who feel ready to work in a real-world environment and want to gain solid experience on AWS and master the AWS platform</li></ul>', 1, 1, 0, '2024-04-16 03:15:05.395', '2024-04-16 03:22:36.079'),
(3, 6, 15, 'Classroom Management Essentials', 'classroom-management-essentials', '<p>Classroom management is consistently identified as a major concern for teachers. Yet, it is absolutely an essential component of effective teaching. This course helps teachers learn how to effectively manage a classroom.&nbsp;The primary goal of the course is to introduce a practical model for understanding and deconstructing the tasks involved in the process of classroom management and on learning practical, easy to implement strategies that enable teachers to spend more time teaching rather than disciplining!</p><p>Specifically, participants in this course will learn:&nbsp;&nbsp;</p><ul><li>Common misconceptions about classroom management</li><li>How to develop effective rules and routines</li><li>The role relationships play in one’s classroom management plan</li><li>Techniques for preventing misbehavior</li><li>Strategies for dealing with minor and more serious misbehavior</li><li>Plus much, much more!</li></ul><p>The course is divided into seven chapters.&nbsp;Each chapter begins with a lecture presented by Dr. Tracey Garrett, a specialist in the field of classroom management.&nbsp;Then, each chapter has a self-guided component where participants can review and expand on the material presented in the first lecture at their own pace.&nbsp;Finally, the remaining lectures in each chapter are interviews of teachers at different grade levels offering insight into their practice.&nbsp;</p>', 35, 75, 0, '28', '1h 51m', 'https://res.cloudinary.com/dev-empty/image/upload/v1713247811/gfnaqkwgpnzlfous1746.jpg', 'Lifetime', '<ul><li>A basic understanding of the dynamics of an elementary, middle or high school classroom is required.</li></ul>', '<ul><li><span style=\"color: rgb(45, 47, 49);\">Students who complete this course will develop the skills necessary to develop a safe, caring and orderly classroom where academic and social-emotional learning can</span></li></ul>', '<ul><li>This target audience for this class is any novice or veteran teacher, supervisor, mentor or coach, and principals who would like to learn about effective classroom management.</li></ul>', 1, 0, 0, '2024-04-16 06:11:20.053', '2024-04-16 06:23:25.737'),
(4, 6, 5, 'Simple Strategy for Swing Trading', 'simple-strategy-for-swing-trading', '<p>I\'ve been a full-time trader of the Stock Market for almost twenty&nbsp;years, and I have developed a very simple and effective strategy for&nbsp;Swing Trading Stocks, ETF\'s -&nbsp;plus the&nbsp;Forex, Cryptocurrency&nbsp;and Commodity Markets.&nbsp;My strategy combines both Fundamental and Technical Analysis, but relies mostly on Technical Analysis of stock charts. This course will concentrate on Technical Analysis, and you will learn everything I know about correctly reading stock charts&nbsp;in about 80 minutes!</p><p>By training yourself to read and correctly interpret the information charts give you, you will be able to predict which way a stock will most likely move in the near future.&nbsp;Charts can actually give you a glimpse of the future, and are a must have tool in the successful trader\'s arsenal.</p><p>In my&nbsp;Beginners Guide to Technical Analysis of Stock Charts here on Udemy, I covered fifty different technical indicators.&nbsp;In this course, I teach the one&nbsp;indicator I use for all of my Buy and Sell Signals, and it\'s accuracy rate is about&nbsp;80%. Two&nbsp;of the most important lessons included in this course are&nbsp;how to handle a false Buy Signal to keep losses to an absolute minimum, and when to lock in profits to maximize your gains.&nbsp;The trading strategy I teach in this course will provide you with a plan for entering and exiting trades with confidence.&nbsp;</p><p>I look forward to helping you to become a&nbsp;successful Trader!</p><p>Happy Trading!&nbsp;</p>', 20, 50, 0, '8', '1h 20m', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248066/ynvaoj85kure7mwqn2ax.jpg', 'One_Year', '<ul><li>You do not need any previous experience with stock charts.</li><li>All you need is an Internet connection and a desire to learn.</li><li>I supply links to all of the free tools needed for USA and Canadian traders.</li><li>For students outside the USA and Canada, your charting software must include the CCI - Commodity Chanel Index</li></ul>', '<ul><li>Become a successful trader!</li><li>Know exactly when to lock in profits.</li><li>Keep your losses to an absolute minimum.</li><li>Have a plan for entry and exit on every trade.</li><li>Trade stocks using one technical indicator that gives excellent Buy and Sell Signals.</li></ul>', '<ul><li>Everyone that wants to learn how to be a successful trader of Stocks and Exchange Traded Funds (ETF\'s)</li><li>This trading strategy also work for trading Currencies, Commodities and Cryptocurrencys.</li><li>Anyone that has too many Technical Indicators on their charts.</li><li>Anyone who wants a solid plan for entering and exiting trades.</li><li>Anyone who wants to stop taking big losses on their trades.</li><li>Anyone that needs a solid trading strategy.</li></ul>', 1, 0, 0, '2024-04-16 06:15:29.204', '2024-04-16 06:23:26.462'),
(5, 6, 5, 'Stock Market Trading', 'stock-market-trading', '<p>I\'ve been a full-time trader of the Stock Market for almost twenty&nbsp;years, and I have developed a very simple and effective strategy for&nbsp;Swing Trading Stocks, ETF\'s -&nbsp;plus the&nbsp;Forex, Cryptocurrency&nbsp;and Commodity Markets.&nbsp;My strategy combines both Fundamental and Technical Analysis, but relies mostly on Technical Analysis of stock charts. This course will concentrate on Technical Analysis, and you will learn everything I know about correctly reading stock charts&nbsp;in about 80 minutes!</p><p>By training yourself to read and correctly interpret the information charts give you, you will be able to predict which way a stock will most likely move in the near future.&nbsp;Charts can actually give you a glimpse of the future, and are a must have tool in the successful trader\'s arsenal.</p><p>In my&nbsp;Beginners Guide to Technical Analysis of Stock Charts here on Udemy, I covered fifty different technical indicators.&nbsp;In this course, I teach the one&nbsp;indicator I use for all of my Buy and Sell Signals, and it\'s accuracy rate is about&nbsp;80%. Two&nbsp;of the most important lessons included in this course are&nbsp;how to handle a false Buy Signal to keep losses to an absolute minimum, and when to lock in profits to maximize your gains.&nbsp;The trading strategy I teach in this course will provide you with a plan for entering and exiting trades with confidence.&nbsp;</p><p>I look forward to helping you to become a&nbsp;successful Trader!</p><p>Happy Trading!&nbsp;</p>', 20, 50, 0, '8', '1h 20m', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248210/dz2ijrpuklidbhhgi03k.jpg', 'One_Year', '<ul><li>You do not need any previous experience with stock charts.</li><li>All you need is an Internet connection and a desire to learn.</li><li>I supply links to all of the free tools needed for USA and Canadian traders.</li><li>For students outside the USA and Canada, your charting software must include the CCI - Commodity Chanel Index</li></ul>', '<ul><li>Become a successful trader!</li><li>Know exactly when to lock in profits.</li><li>Keep your losses to an absolute minimum.</li><li>Have a plan for entry and exit on every trade.</li><li>Trade stocks using one technical indicator that gives excellent Buy and Sell Signals.</li></ul>', '<ul><li>Everyone that wants to learn how to be a successful trader of Stocks and Exchange Traded Funds (ETF\'s)</li><li>This trading strategy also work for trading Currencies, Commodities and Cryptocurrencys.</li><li>Anyone that has too many Technical Indicators on their charts.</li><li>Anyone who wants a solid plan for entering and exiting trades.</li><li>Anyone who wants to stop taking big losses on their trades.</li><li>Anyone that needs a solid trading strategy.</li></ul>', 1, 0, 0, '2024-04-16 06:16:56.264', '2024-04-16 06:23:27.217'),
(6, 6, 5, 'Technical Analysis MasterClass', 'technical-analysis-masterclass', '<p>I\'ve been a full-time trader of the Stock Market for almost twenty&nbsp;years, and I have developed a very simple and effective strategy for&nbsp;Swing Trading Stocks, ETF\'s -&nbsp;plus the&nbsp;Forex, Cryptocurrency&nbsp;and Commodity Markets.&nbsp;My strategy combines both Fundamental and Technical Analysis, but relies mostly on Technical Analysis of stock charts. This course will concentrate on Technical Analysis, and you will learn everything I know about correctly reading stock charts&nbsp;in about 80 minutes!</p><p>By training yourself to read and correctly interpret the information charts give you, you will be able to predict which way a stock will most likely move in the near future.&nbsp;Charts can actually give you a glimpse of the future, and are a must have tool in the successful trader\'s arsenal.</p><p>In my&nbsp;Beginners Guide to Technical Analysis of Stock Charts here on Udemy, I covered fifty different technical indicators.&nbsp;In this course, I teach the one&nbsp;indicator I use for all of my Buy and Sell Signals, and it\'s accuracy rate is about&nbsp;80%. Two&nbsp;of the most important lessons included in this course are&nbsp;how to handle a false Buy Signal to keep losses to an absolute minimum, and when to lock in profits to maximize your gains.&nbsp;The trading strategy I teach in this course will provide you with a plan for entering and exiting trades with confidence.&nbsp;</p><p>I look forward to helping you to become a&nbsp;successful Trader!</p><p>Happy Trading!&nbsp;</p>', 20, 50, 0, '8', '1h 20m', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248298/gav1xg9vpqtrlps8l0jz.jpg', 'One_Year', '<ul><li>You do not need any previous experience with stock charts.</li><li>All you need is an Internet connection and a desire to learn.</li><li>I supply links to all of the free tools needed for USA and Canadian traders.</li><li>For students outside the USA and Canada, your charting software must include the CCI - Commodity Chanel Index</li></ul>', '<ul><li>Become a successful trader!</li><li>Know exactly when to lock in profits.</li><li>Keep your losses to an absolute minimum.</li><li>Have a plan for entry and exit on every trade.</li><li>Trade stocks using one technical indicator that gives excellent Buy and Sell Signals.</li></ul>', '<ul><li>Everyone that wants to learn how to be a successful trader of Stocks and Exchange Traded Funds (ETF\'s)</li><li>This trading strategy also work for trading Currencies, Commodities and Cryptocurrencys.</li><li>Anyone that has too many Technical Indicators on their charts.</li><li>Anyone who wants a solid plan for entering and exiting trades.</li><li>Anyone who wants to stop taking big losses on their trades.</li><li>Anyone that needs a solid trading strategy.</li></ul>', 1, 0, 0, '2024-04-16 06:18:22.402', '2024-04-16 06:23:27.849');

-- --------------------------------------------------------

--
-- Table structure for table `Earning`
--

CREATE TABLE `Earning` (
  `id` int(11) NOT NULL,
  `cost` double DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `status` enum('Due','Paid','Cancelled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Due',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Enrolment`
--

CREATE TABLE `Enrolment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `order_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) DEFAULT NULL,
  `paymentId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_status` enum('PENDING','PAID','CANCELLED','HOLD') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `status` enum('PENDING','PAID','CANCELLED','HOLD') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `payment_via` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Enrolment`
--

INSERT INTO `Enrolment` (`id`, `userId`, `courseId`, `order_number`, `price`, `paymentId`, `payment_status`, `status`, `payment_via`, `created_at`) VALUES
(1, 6, 1, 'ORD-9818', 100, 'pi_3P116FGkYVWSHYLW1NBlsdSa', 'PAID', 'PAID', 'Stripe', '2024-04-02 06:45:40.214');

-- --------------------------------------------------------

--
-- Table structure for table `Favourite`
--

CREATE TABLE `Favourite` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Partner`
--

CREATE TABLE `Partner` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Partner`
--

INSERT INTO `Partner` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(5, 'Google', 'https://res.cloudinary.com/dev-empty/image/upload/v1712471902/mqxx0l2rbohkprp3xzw1.png', '2024-04-07 06:38:24.141', '2024-04-07 06:38:24.141'),
(6, 'MS', 'https://res.cloudinary.com/dev-empty/image/upload/v1712471948/llz0bauapvvl5orjrtoz.png', '2024-04-07 06:39:10.350', '2024-04-07 06:39:10.350'),
(7, 'Apple', 'https://res.cloudinary.com/dev-empty/image/upload/v1712471962/liykku9qtakwl4nu199g.png', '2024-04-07 06:39:24.023', '2024-04-07 06:39:24.023'),
(8, 'Everlane', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248699/lerclugqsfzslxxjbg4j.png', '2024-04-16 06:25:10.564', '2024-04-16 06:25:10.564'),
(9, 'Pegasus', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248719/rndof0zazfdwacvpwx45.png', '2024-04-16 06:25:26.673', '2024-04-16 06:25:26.673'),
(10, 'Comedy', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248735/mjlhsaokpmqi6j7rfnrw.png', '2024-04-16 06:25:40.444', '2024-04-16 06:25:40.444');

-- --------------------------------------------------------

--
-- Table structure for table `Profile`
--

CREATE TABLE `Profile` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `designation` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Profile`
--

INSERT INTO `Profile` (`id`, `userId`, `designation`, `bio`, `location`, `phone`, `website`, `twitter`, `facebook`, `linkedin`, `youtube`) VALUES
(1, 6, '', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley ', '', '+8801646295918', 'https://themes.gallery/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com', 'https://youtube.com');

-- --------------------------------------------------------

--
-- Table structure for table `Progress`
--

CREATE TABLE `Progress` (
  `id` int(11) NOT NULL,
  `finished` tinyint(1) NOT NULL DEFAULT '1',
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `videoId` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Progress`
--

INSERT INTO `Progress` (`id`, `finished`, `userId`, `courseId`, `videoId`, `created_at`) VALUES
(12, 1, 6, 1, 1, '2024-04-03 07:08:32.167'),
(13, 1, 6, 1, 11, '2024-04-03 07:08:43.206'),
(14, 1, 6, 1, 9, '2024-04-03 07:08:45.749'),
(15, 1, 6, 1, 8, '2024-04-03 07:08:48.775'),
(16, 1, 6, 1, 10, '2024-04-03 07:08:50.782');

-- --------------------------------------------------------

--
-- Table structure for table `Review`
--

CREATE TABLE `Review` (
  `id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Review`
--

INSERT INTO `Review` (`id`, `rating`, `comment`, `userId`, `courseId`, `created_at`, `updated_at`) VALUES
(1, 2, 'Worst', 6, 1, '2024-04-03 05:52:51.015', '2024-04-03 05:52:51.015'),
(2, 3, 'Everage.....', 6, 1, '2024-04-03 06:05:59.609', '2024-04-03 06:05:59.609');

-- --------------------------------------------------------

--
-- Table structure for table `Subscription`
--

CREATE TABLE `Subscription` (
  `id` int(11) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Testimonial`
--

CREATE TABLE `Testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Testimonial`
--

INSERT INTO `Testimonial` (`id`, `name`, `image`, `designation`, `description`, `created_at`, `updated_at`) VALUES
(1, 'John Berkings', 'https://res.cloudinary.com/dev-empty/image/upload/v1712478054/lj5qjro9mgaezlsubgrx.jpg', 'Angular CEO', 'Syntho Laboratories Ltd is the best Pharmaceutical manufacturer company in Bangladesh. We are leading pharmaceutical and medicine manufacturer company in ..', '2024-04-07 08:21:31.106', '2024-04-07 08:45:41.630'),
(3, 'Mobile', 'https://res.cloudinary.com/dev-empty/image/upload/v1712478054/lj5qjro9mgaezlsubgrx.jpg', 'Angular CEO', 'Syntho Laboratories Ltd is the best Pharmaceutical manufacturer company in Bangladesh. We are leading pharmaceutical and medicine manufacturer company in ..', '2024-04-07 08:21:31.106', '2024-04-08 05:56:27.138');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashedPassword` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('USER','INSTRUCTOR','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USER',
  `gender` enum('Male','Female') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_instructor` tinyint(1) NOT NULL DEFAULT '0',
  `email_confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `email_confirmed_at` datetime(3) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `hashedPassword`, `image`, `role`, `gender`, `is_instructor`, `email_confirmed`, `email_confirmed_at`, `is_active`, `created_at`, `updated_at`) VALUES
(6, 'John Doe', 'shabbirahmed149@gmail.com', '$2b$12$kERK.Uxb3nHHxlFB0iMlnuq5omFj6362gJyyY07193jH.1TcP7s9G', 'https://res.cloudinary.com/dev-empty/image/upload/v1712139903/typ3uhxza7v9wv5w48ch.jpg', 'ADMIN', 'Male', 0, 0, NULL, 1, '2024-03-11 08:47:48.153', '2024-04-03 10:25:06.433');

-- --------------------------------------------------------

--
-- Table structure for table `Video`
--

CREATE TABLE `Video` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `group_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumb_Image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_length` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_preview` tinyint(1) NOT NULL DEFAULT '0',
  `short_id` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Video`
--

INSERT INTO `Video` (`id`, `courseId`, `group_name`, `title`, `thumb_Image`, `video_url`, `video_length`, `is_preview`, `short_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Introduction', 'How to setup computer?', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 1, 1, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(8, 1, 'Introduction', 'Setep 1', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 0, 3, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(9, 1, 'Introduction', 'Setep 2', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 1, 5, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(10, 1, 'Introduction', 'Setep 3', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 1, 2, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(11, 1, 'Introduction', 'Setep 4', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/colbycloud-next-cloudinary/video/upload/q_auto/f_auto:video/v1/videos/mountain-stars?_s=vp-1.10.6', '00:00:08', 1, 10, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(12, 2, 'Phase 1', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713237409/o3rjz4nxiu9xzj5i3qat.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713237433/wvo6bepjgkg5nsgwz9bm.mp4', '00:00:08', 1, 0, '2024-04-16 03:17:27.816', '2024-04-16 03:17:27.816'),
(13, 2, 'Phase 1', 'Setup Environment', 'https://res.cloudinary.com/dev-empty/image/upload/v1713237525/srrnamqv1vqsgrq8buhz.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713237494/gud1w1cimli7yf23glgb.mp4', '00:00:25', 0, 1, '2024-04-16 03:20:53.188', '2024-04-16 03:20:53.188'),
(14, 6, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248339/j1xmqfob3bmrvifyotno.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248349/exuhwhbteencg7etqbl5.mp4', '00:00:10', 1, 0, '2024-04-16 06:19:19.605', '2024-04-16 06:19:19.605'),
(15, 6, 'Introduction', 'Technical Analysis', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248421/wendd6igfdg6spinol2c.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248398/fxuf781bz1smwrqr6hbh.mp4', '00:00:20', 0, 1, '2024-04-16 06:20:27.030', '2024-04-16 06:20:27.030'),
(16, 4, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248471/swf357os32qf0nywkk4o.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248486/i4gtg3jtg3zq4eefonp3.mp4', '00:00:06', 1, 0, '2024-04-16 06:21:33.383', '2024-04-16 06:21:33.383'),
(17, 5, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248554/remidjexilj2nmucpdt0.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248526/qg2tcp96vytoisg8mfpr.mp4', '00:00:10', 0, 1, '2024-04-16 06:22:40.066', '2024-04-16 06:22:40.066'),
(18, 3, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248577/hcvbbktracmft2z4s0rh.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248587/rtmsqdcyxvgn61u8nybf.mp4', '00:00:19', 1, 1, '2024-04-16 06:23:15.384', '2024-04-16 06:23:15.384');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  ADD KEY `Account_userId_idx` (`userId`);

--
-- Indexes for table `Asset`
--
ALTER TABLE `Asset`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Asset_courseId_idx` (`courseId`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Coupon`
--
ALTER TABLE `Coupon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Coupon_code_key` (`code`);

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Course_slug_key` (`slug`),
  ADD KEY `Course_userId_catId_idx` (`userId`,`catId`);

--
-- Indexes for table `Earning`
--
ALTER TABLE `Earning`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Earning_courseId_userId_idx` (`courseId`,`userId`);

--
-- Indexes for table `Enrolment`
--
ALTER TABLE `Enrolment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Enrolment_order_number_key` (`order_number`),
  ADD KEY `Enrolment_courseId_userId_idx` (`courseId`,`userId`);

--
-- Indexes for table `Favourite`
--
ALTER TABLE `Favourite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Favourite_courseId_userId_idx` (`courseId`,`userId`);

--
-- Indexes for table `Partner`
--
ALTER TABLE `Partner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Profile_userId_key` (`userId`);

--
-- Indexes for table `Progress`
--
ALTER TABLE `Progress`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Progress_courseId_userId_videoId_idx` (`courseId`,`userId`,`videoId`);

--
-- Indexes for table `Review`
--
ALTER TABLE `Review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Review_userId_courseId_idx` (`userId`,`courseId`);

--
-- Indexes for table `Subscription`
--
ALTER TABLE `Subscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Subscription_email_key` (`email`);

--
-- Indexes for table `Testimonial`
--
ALTER TABLE `Testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `Video`
--
ALTER TABLE `Video`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Video_courseId_idx` (`courseId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Account`
--
ALTER TABLE `Account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Asset`
--
ALTER TABLE `Asset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Coupon`
--
ALTER TABLE `Coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Course`
--
ALTER TABLE `Course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Earning`
--
ALTER TABLE `Earning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Enrolment`
--
ALTER TABLE `Enrolment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Favourite`
--
ALTER TABLE `Favourite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Partner`
--
ALTER TABLE `Partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Profile`
--
ALTER TABLE `Profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Progress`
--
ALTER TABLE `Progress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Review`
--
ALTER TABLE `Review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Subscription`
--
ALTER TABLE `Subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Testimonial`
--
ALTER TABLE `Testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Video`
--
ALTER TABLE `Video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
