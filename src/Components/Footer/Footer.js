import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-[#0E0E2C] dark:bg-gray-900 text-white mt-5">
                <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 mx-16">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">Company</h2>
                        <ul class="text-white dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About Us</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Portfolio</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Pricing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">Contact</h2>
                        <ul class="text-white dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Quote</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">infenito@gmail.com</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">9843753330</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">More</h2>
                        <ul class="text-white dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Instragram</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">LinkdIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;