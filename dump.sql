--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: flights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    origin integer NOT NULL,
    destination integer NOT NULL,
    date date NOT NULL,
    CONSTRAINT flights_check CHECK ((origin <> destination))
);


--
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- Name: passengers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.passengers (
    id integer NOT NULL,
    "firstName" character varying(100) NOT NULL,
    "lastName" character varying(100) NOT NULL
);


--
-- Name: passengers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.passengers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: passengers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.passengers_id_seq OWNED BY public.passengers.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    "passengerId" integer NOT NULL,
    "flightId" integer NOT NULL
);


--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- Name: passengers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers ALTER COLUMN id SET DEFAULT nextval('public.passengers_id_seq'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cities VALUES (1, 'salvador');
INSERT INTO public.cities VALUES (2, 'fortaleza');
INSERT INTO public.cities VALUES (3, 'Natal');
INSERT INTO public.cities VALUES (4, 'rio de janeiro');
INSERT INTO public.cities VALUES (5, 'São Paulo');
INSERT INTO public.cities VALUES (6, 'São Carlos');
INSERT INTO public.cities VALUES (7, 'Los SAntos');
INSERT INTO public.cities VALUES (8, 'TOwnsville');
INSERT INTO public.cities VALUES (9, 'João Pessoa');
INSERT INTO public.cities VALUES (10, 'Recife');
INSERT INTO public.cities VALUES (11, 'Palmas');


--
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.flights VALUES (1, 1, 2, '2023-12-24');
INSERT INTO public.flights VALUES (2, 1, 2, '2023-12-24');
INSERT INTO public.flights VALUES (4, 1, 2, '2023-09-08');
INSERT INTO public.flights VALUES (5, 1, 2, '2023-09-15');
INSERT INTO public.flights VALUES (6, 1, 2, '2023-09-08');
INSERT INTO public.flights VALUES (7, 1, 2, '2023-09-08');
INSERT INTO public.flights VALUES (8, 1, 2, '2023-09-09');
INSERT INTO public.flights VALUES (9, 2, 1, '2023-09-10');
INSERT INTO public.flights VALUES (10, 2, 1, '2023-09-11');
INSERT INTO public.flights VALUES (11, 1, 3, '2023-09-11');
INSERT INTO public.flights VALUES (12, 1, 4, '2023-09-11');
INSERT INTO public.flights VALUES (13, 2, 4, '2023-09-11');
INSERT INTO public.flights VALUES (14, 1, 2, '2023-09-15');


--
-- Data for Name: passengers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.passengers VALUES (1, 'jefti', 'meira');
INSERT INTO public.passengers VALUES (2, 'ash', 'ketchum');
INSERT INTO public.passengers VALUES (4, 'clark', 'kent');
INSERT INTO public.passengers VALUES (5, 'bruce', 'wayne');
INSERT INTO public.passengers VALUES (6, 'tony', 'stark');
INSERT INTO public.passengers VALUES (7, 'diana', 'prince');
INSERT INTO public.passengers VALUES (8, 'naruto', 'uzumaki');
INSERT INTO public.passengers VALUES (9, 'sasuke', 'uchiha');
INSERT INTO public.passengers VALUES (10, 'itachi', 'uchiha');
INSERT INTO public.passengers VALUES (11, 'obito', 'uchiha');
INSERT INTO public.passengers VALUES (12, 'madara', 'uchiha');
INSERT INTO public.passengers VALUES (13, 'sakura', 'haruno');
INSERT INTO public.passengers VALUES (14, 'minato', 'namikaze');
INSERT INTO public.passengers VALUES (15, 'luffy', 'Monkey');
INSERT INTO public.passengers VALUES (16, 'zoro', 'roronoa');
INSERT INTO public.passengers VALUES (17, 'nami', 'belmere');
INSERT INTO public.passengers VALUES (18, 'Ussop', 'God');
INSERT INTO public.passengers VALUES (19, 'Sanji', 'Vinsmoke');
INSERT INTO public.passengers VALUES (20, 'Chopper', 'tony tony');
INSERT INTO public.passengers VALUES (21, 'nico', 'robin');


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.travels VALUES (1, 1, 2);
INSERT INTO public.travels VALUES (2, 2, 2);
INSERT INTO public.travels VALUES (3, 2, 1);
INSERT INTO public.travels VALUES (5, 4, 1);
INSERT INTO public.travels VALUES (6, 5, 1);
INSERT INTO public.travels VALUES (7, 6, 1);
INSERT INTO public.travels VALUES (8, 7, 1);
INSERT INTO public.travels VALUES (9, 8, 1);
INSERT INTO public.travels VALUES (10, 9, 1);
INSERT INTO public.travels VALUES (11, 10, 1);
INSERT INTO public.travels VALUES (12, 11, 1);
INSERT INTO public.travels VALUES (13, 12, 1);
INSERT INTO public.travels VALUES (14, 13, 1);
INSERT INTO public.travels VALUES (15, 14, 1);
INSERT INTO public.travels VALUES (16, 15, 1);
INSERT INTO public.travels VALUES (17, 16, 1);
INSERT INTO public.travels VALUES (18, 17, 1);
INSERT INTO public.travels VALUES (19, 18, 1);
INSERT INTO public.travels VALUES (20, 19, 1);
INSERT INTO public.travels VALUES (21, 20, 1);
INSERT INTO public.travels VALUES (22, 21, 1);
INSERT INTO public.travels VALUES (23, 4, 2);
INSERT INTO public.travels VALUES (24, 6, 2);
INSERT INTO public.travels VALUES (25, 8, 2);
INSERT INTO public.travels VALUES (26, 10, 2);
INSERT INTO public.travels VALUES (27, 12, 2);
INSERT INTO public.travels VALUES (28, 14, 2);
INSERT INTO public.travels VALUES (29, 16, 2);
INSERT INTO public.travels VALUES (30, 18, 2);
INSERT INTO public.travels VALUES (31, 20, 2);
INSERT INTO public.travels VALUES (41, 4, 4);
INSERT INTO public.travels VALUES (42, 6, 4);
INSERT INTO public.travels VALUES (43, 8, 4);
INSERT INTO public.travels VALUES (44, 10, 4);
INSERT INTO public.travels VALUES (45, 12, 4);
INSERT INTO public.travels VALUES (46, 14, 4);
INSERT INTO public.travels VALUES (47, 16, 4);
INSERT INTO public.travels VALUES (48, 18, 4);
INSERT INTO public.travels VALUES (49, 20, 4);
INSERT INTO public.travels VALUES (50, 4, 5);
INSERT INTO public.travels VALUES (51, 6, 5);
INSERT INTO public.travels VALUES (52, 8, 5);
INSERT INTO public.travels VALUES (53, 10, 5);
INSERT INTO public.travels VALUES (54, 12, 5);
INSERT INTO public.travels VALUES (55, 14, 5);
INSERT INTO public.travels VALUES (56, 16, 5);
INSERT INTO public.travels VALUES (57, 18, 5);
INSERT INTO public.travels VALUES (58, 20, 5);
INSERT INTO public.travels VALUES (59, 5, 6);
INSERT INTO public.travels VALUES (60, 7, 6);
INSERT INTO public.travels VALUES (61, 9, 6);
INSERT INTO public.travels VALUES (62, 11, 6);
INSERT INTO public.travels VALUES (63, 13, 6);
INSERT INTO public.travels VALUES (64, 15, 6);
INSERT INTO public.travels VALUES (65, 17, 6);
INSERT INTO public.travels VALUES (66, 19, 6);
INSERT INTO public.travels VALUES (67, 21, 6);
INSERT INTO public.travels VALUES (68, 5, 7);
INSERT INTO public.travels VALUES (69, 7, 7);
INSERT INTO public.travels VALUES (70, 9, 7);
INSERT INTO public.travels VALUES (71, 11, 7);
INSERT INTO public.travels VALUES (72, 13, 7);
INSERT INTO public.travels VALUES (73, 15, 7);
INSERT INTO public.travels VALUES (74, 17, 7);
INSERT INTO public.travels VALUES (75, 19, 7);
INSERT INTO public.travels VALUES (76, 21, 7);
INSERT INTO public.travels VALUES (77, 6, 8);
INSERT INTO public.travels VALUES (78, 9, 8);
INSERT INTO public.travels VALUES (79, 12, 8);
INSERT INTO public.travels VALUES (80, 15, 8);
INSERT INTO public.travels VALUES (81, 18, 8);
INSERT INTO public.travels VALUES (82, 21, 8);
INSERT INTO public.travels VALUES (83, 4, 9);
INSERT INTO public.travels VALUES (84, 8, 9);
INSERT INTO public.travels VALUES (85, 12, 9);
INSERT INTO public.travels VALUES (86, 16, 9);
INSERT INTO public.travels VALUES (87, 20, 9);
INSERT INTO public.travels VALUES (88, 5, 10);
INSERT INTO public.travels VALUES (89, 10, 10);
INSERT INTO public.travels VALUES (90, 15, 10);
INSERT INTO public.travels VALUES (91, 20, 10);
INSERT INTO public.travels VALUES (92, 6, 11);
INSERT INTO public.travels VALUES (93, 12, 11);
INSERT INTO public.travels VALUES (94, 18, 11);
INSERT INTO public.travels VALUES (95, 21, 11);
INSERT INTO public.travels VALUES (96, 7, 12);
INSERT INTO public.travels VALUES (97, 14, 12);
INSERT INTO public.travels VALUES (98, 21, 12);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 11, true);


--
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flights_id_seq', 14, true);


--
-- Name: passengers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.passengers_id_seq', 21, true);


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.travels_id_seq', 98, true);


--
-- Name: cities cities_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_name_key UNIQUE (name);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- Name: passengers passengers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers
    ADD CONSTRAINT passengers_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: flights flights_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_destination_fkey FOREIGN KEY (destination) REFERENCES public.cities(id);


--
-- Name: flights flights_origin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_origin_fkey FOREIGN KEY (origin) REFERENCES public.cities(id);


--
-- Name: travels travels_flightId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES public.flights(id);


--
-- Name: travels travels_passengerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES public.passengers(id);


--
-- PostgreSQL database dump complete
--

