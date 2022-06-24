import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const {slug} = useParams<{slug: string}>()
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })


    const isActiveLesson = slug === props.slug;


    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-customGray-300">
                {availableDateFormatted}
            </span>
        
            <div 
            className={classnames('rounded border border-customGray-500 p-4 mt-2 group-hover:border-customGreen-500', {
                'bg-customGreen-500': isActiveLesson,
            })}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <>
                        <span className={classnames("text-sm font-medium flex items-center gap-2", {
                            'text-white': isActiveLesson,
                            'text-customBlue-500': !isActiveLesson
                        })}>
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

                    <span 
                    className={classnames("text-xs rounded px-2 py-[0.125rem] text-white border font-bold", {
                        "border-white": isActiveLesson,
                        "border-customGreen-300": !isActiveLesson 
                    })}
                    >
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classnames("mt-5 block", {
                    "text-white" : isActiveLesson,
                    "text-customGray-200 ": !isActiveLesson,
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}