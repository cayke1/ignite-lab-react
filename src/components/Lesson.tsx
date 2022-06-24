import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from "react-router-dom";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })


    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-customGray-300">
                {availableDateFormatted}
            </span>

            <div className="rounded border border-customGray-500 p-4 mt-2 group-hover:border-customGreen-500">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <>
                        <span className="text-sm text-customBlue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                        </>
                    ) : (
                        <span className="text-sm text-customOrange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-customGreen-300 bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-customGray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}