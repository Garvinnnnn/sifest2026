<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
        {
            $events = [
                [
                    'id' => 1,
                    'title' => 'Workshop Laravel + React',
                    'category' => 'Programming',
                    'date' => '27 Juni 2026',
                    'location' => 'Discord HIMSI',
                    'description' => 'Belajar membuat aplikasi web menggunakan Laravel dan React.',
                    'pendaftar' => 22,
                    'maksimalPendaftar' => 30,
                ],
                [
                    'id' => 2,
                    'title' => 'Design menggunakan Figma',
                    'category' => 'Design',
                    'date' => '28 Juni 2026',
                    'location' => 'Discord HIMSI',
                    'description' => 'Belajar membuat desain UI/UX menggunakan Figma.',
                    'pendaftar' => 30,
                    'maksimalPendaftar' => 50,
                ],
                [
                    'id' => 3,
                    'title' => 'Design dari wireframe ke prototype',
                    'category' => 'Design',
                    'date' => '29 Juni 2026',
                    'location' => 'Discord HIMSI',
                    'description' => 'Belajar membuat desain dari wireframe ke prototype menggunakan Figma.',
                    'pendaftar' => 22,
                    'maksimalPendaftar' => 30,
                ],
            ];

            return inertia('EventPage', ['events' => $events]);
        }
}
